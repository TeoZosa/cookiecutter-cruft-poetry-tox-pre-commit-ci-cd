window.BENCHMARK_DATA = {
  "lastUpdate": 1613427131232,
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
          "id": "c99f5016a8338748a78a089d8c8fe09887097084",
          "message": "Merge pull request #63 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.7.3\n\n⬆️ Bump structlog-sentry-logger from 0.6.1 to 0.7.3",
          "timestamp": "2021-02-15T14:07:53-08:00",
          "tree_id": "cc9e51076524753fc42f3a5702cd014097872d77",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/c99f5016a8338748a78a089d8c8fe09887097084"
        },
        "date": 1613427130053,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14479.204922660956,
            "unit": "iter/sec",
            "range": "stddev: 0.0001398608603775714",
            "extra": "mean: 69.06456572314484 usec\nrounds: 11442"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3867855.275444794,
            "unit": "iter/sec",
            "range": "stddev: 4.250073571914877e-7",
            "extra": "mean: 258.54121439075186 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12154.643888320996,
            "unit": "iter/sec",
            "range": "stddev: 0.00011428652257974044",
            "extra": "mean: 82.27308090538692 usec\nrounds: 9542"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 163118.35524861858,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060927610592961556",
            "extra": "mean: 6.130517920413306 usec\nrounds: 43860"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14296.641166987958,
            "unit": "iter/sec",
            "range": "stddev: 0.0001275971088412758",
            "extra": "mean: 69.94649920353856 usec\nrounds: 6274"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2886995.7039814168,
            "unit": "iter/sec",
            "range": "stddev: 3.7449847864552784e-7",
            "extra": "mean: 346.3808410317042 nsec\nrounds: 19881"
          }
        ]
      }
    ]
  }
}