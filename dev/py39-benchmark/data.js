window.BENCHMARK_DATA = {
  "lastUpdate": 1623635116883,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "a7e090ed4294014ef71a78b2c4cdf92e78173a4b",
          "message": ":wrench: :bug: Fix Makefile shell var syntax",
          "timestamp": "2021-06-14T01:40:20Z",
          "tree_id": "b60fcaf46d088f0d6c6500464f63d39a622d1320"
        },
        "date": 1623635115503,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14599.474973221979,
            "unit": "iter/sec",
            "range": "stddev: 0.00003534311624626766",
            "extra": "mean: 68.49561383777 usec\nrounds: 10941"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4292215.796052086,
            "unit": "iter/sec",
            "range": "stddev: 3.3446295770506273e-7",
            "extra": "mean: 232.97989838242577 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12323.228826785093,
            "unit": "iter/sec",
            "range": "stddev: 0.00002650711354299927",
            "extra": "mean: 81.1475640074503 usec\nrounds: 8046"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 137461.4523799963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026891069780415583",
            "extra": "mean: 7.27476672686111 usec\nrounds: 3318"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15377.54038101066,
            "unit": "iter/sec",
            "range": "stddev: 0.000022923399880605232",
            "extra": "mean: 65.0299056430946 usec\nrounds: 3190"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4125419.884404079,
            "unit": "iter/sec",
            "range": "stddev: 3.978828923236408e-7",
            "extra": "mean: 242.3995685337589 nsec\nrounds: 166667"
          }
        ]
      }
    ]
  }
}