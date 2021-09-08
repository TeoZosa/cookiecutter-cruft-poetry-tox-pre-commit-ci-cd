window.BENCHMARK_DATA = {
  "lastUpdate": 1631120328941,
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
          "id": "648d2628c5e2506ff21ae1013ae266a1f7dca17f",
          "message": ":cookie: :memo: Mark ADR documentation component as optional",
          "timestamp": "2021-09-08T16:46:59Z",
          "tree_id": "51007f9c7027507fc662c71ce941769f9fbef775"
        },
        "date": 1631120326308,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15355.52783253365,
            "unit": "iter/sec",
            "range": "stddev: 0.00004374769836887074",
            "extra": "mean: 65.12312770397295 usec\nrounds: 1848"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4040330.292176883,
            "unit": "iter/sec",
            "range": "stddev: 2.890050650784443e-7",
            "extra": "mean: 247.50451762229858 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13063.6006915702,
            "unit": "iter/sec",
            "range": "stddev: 0.00004325109197985727",
            "extra": "mean: 76.54857367504268 usec\nrounds: 9026"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 116850.1262405065,
            "unit": "iter/sec",
            "range": "stddev: 0.00001607913199192425",
            "extra": "mean: 8.557971070923385 usec\nrounds: 45249"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15623.384181647109,
            "unit": "iter/sec",
            "range": "stddev: 0.00007508927858530393",
            "extra": "mean: 64.00661907646786 usec\nrounds: 8251"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3824514.8790119803,
            "unit": "iter/sec",
            "range": "stddev: 3.8180940224982274e-7",
            "extra": "mean: 261.47107061528993 nsec\nrounds: 185186"
          }
        ]
      }
    ]
  }
}