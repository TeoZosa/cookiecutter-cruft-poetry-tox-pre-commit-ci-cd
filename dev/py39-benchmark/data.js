window.BENCHMARK_DATA = {
  "lastUpdate": 1613429096356,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d2fe16ff0a15a661731fc071a11037faa8cfe22",
          "message": "Merge pull request #70 from TeoZosa/dependabot/pip/sphinx-3.5.0\n\n⬆️ Bump sphinx from 3.4.3 to 3.5.0",
          "timestamp": "2021-02-15T14:40:17-08:00",
          "tree_id": "e60f50742928a8103175d477539bd5d348f643ff",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/7d2fe16ff0a15a661731fc071a11037faa8cfe22"
        },
        "date": 1613429095031,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14722.74907115707,
            "unit": "iter/sec",
            "range": "stddev: 0.000020984197381829032",
            "extra": "mean: 67.92209764405156 usec\nrounds: 2376"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4120749.8268392677,
            "unit": "iter/sec",
            "range": "stddev: 2.3025170634418785e-7",
            "extra": "mean: 242.67428065814605 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12900.672401239595,
            "unit": "iter/sec",
            "range": "stddev: 0.00004387300177980189",
            "extra": "mean: 77.51533942555679 usec\nrounds: 6785"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 180431.94896375097,
            "unit": "iter/sec",
            "range": "stddev: 0.000006252496132033005",
            "extra": "mean: 5.5422557132656225 usec\nrounds: 61350"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13442.44134245915,
            "unit": "iter/sec",
            "range": "stddev: 0.00016807338882981562",
            "extra": "mean: 74.39124892004631 usec\nrounds: 13643"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4442963.389161856,
            "unit": "iter/sec",
            "range": "stddev: 1.9204536982308946e-7",
            "extra": "mean: 225.07500341753257 nsec\nrounds: 200000"
          }
        ]
      }
    ]
  }
}