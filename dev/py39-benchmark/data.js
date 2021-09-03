window.BENCHMARK_DATA = {
  "lastUpdate": 1630645801819,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "3d5795b9ec99e88b399daee8c8ba38032a485f39",
          "message": ":boom: Conditionally exclude ADR management configurations",
          "timestamp": "2021-09-03T05:04:29Z",
          "tree_id": "e466c9f40e3cbc994e7e7f30d9b042e2e2ea6bd6"
        },
        "date": 1630645799484,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16578.052195870056,
            "unit": "iter/sec",
            "range": "stddev: 0.000008466499420602743",
            "extra": "mean: 60.32071730653142 usec\nrounds: 12579"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4974391.5001284,
            "unit": "iter/sec",
            "range": "stddev: 3.529196849379046e-7",
            "extra": "mean: 201.02961336564078 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14413.638046126627,
            "unit": "iter/sec",
            "range": "stddev: 0.000018791637989428733",
            "extra": "mean: 69.37873677691869 usec\nrounds: 8905"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 152681.50652274792,
            "unit": "iter/sec",
            "range": "stddev: 7.784897390989314e-7",
            "extra": "mean: 6.549581693124115 usec\nrounds: 36631"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16389.39484081643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000599203444777904",
            "extra": "mean: 61.01506551721989 usec\nrounds: 13569"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4974195.005657288,
            "unit": "iter/sec",
            "range": "stddev: 1.438366908349561e-8",
            "extra": "mean: 201.03755459170114 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}