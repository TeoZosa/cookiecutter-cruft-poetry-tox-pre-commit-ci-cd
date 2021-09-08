window.BENCHMARK_DATA = {
  "lastUpdate": 1631119586339,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "id": "9e95bd016901f9f2647eb31bad4d1880eb8e4794",
          "message": ":arrow_up: Bump python in /{{cookiecutter.project_slug}}\n\nBumps python from `8402d0e` to `3d82b79`.\n\n---\nupdated-dependencies:\n- dependency-name: python\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-09-08T16:35:31Z",
          "tree_id": "62629c9253d260679a6d173c0460d962af828350"
        },
        "date": 1631119583860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14879.731268691326,
            "unit": "iter/sec",
            "range": "stddev: 0.00008149611770924375",
            "extra": "mean: 67.20551480013053 usec\nrounds: 12331"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4458336.457266981,
            "unit": "iter/sec",
            "range": "stddev: 8.500893890675326e-7",
            "extra": "mean: 224.29890825534386 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13094.371377187093,
            "unit": "iter/sec",
            "range": "stddev: 0.000017092814313983518",
            "extra": "mean: 76.36869088211381 usec\nrounds: 9443"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 139143.14906519718,
            "unit": "iter/sec",
            "range": "stddev: 0.000003841335429677299",
            "extra": "mean: 7.186843238192331 usec\nrounds: 47620"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15076.553077500335,
            "unit": "iter/sec",
            "range": "stddev: 0.000011611633482307473",
            "extra": "mean: 66.32815835685687 usec\nrounds: 9226"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4616277.657048744,
            "unit": "iter/sec",
            "range": "stddev: 6.698394856157623e-7",
            "extra": "mean: 216.62475143271902 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}